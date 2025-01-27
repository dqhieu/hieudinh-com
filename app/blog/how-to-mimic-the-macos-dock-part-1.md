---
title: How to mimic the macOS dock (part 1)
date: 2025-01-27
tags: [Swift, SwiftUI, macOS, AppKit]
---

This month I tried to build a new macOS application from an idea I had since a year ago. When I use MacBook with external displays, the dock always shows in the main display which is kind of annoying since I have to move focus from the external display to main display if I want to use the dock. That's why I wanted to build a new app which can bring the dock over to external displays so that I can see the dock in all of the displays.

To build a proof of concept for this app, here are things I need to do:

1. Get the list of running applications
2. Display all running applications in a horizontal container
3. Make the container looks similar to the Dock container
4. Pin the container to the bottom of the screen

Let's get started!

# Get the list of running applications

In macOS, you can get the all running applications by using [runningApplications](https://developer.apple.com/documentation/appkit/nsworkspace/runningapplications) property of NSWorkspace. This property returns an array of [NSRunningApplication](https://developer.apple.com/documentation/appkit/nsrunningapplication) instances.

The NSRunningApplication gives you `localizedName: String?`, `icon: NSImage?`, and `bundleURL: URL?` so you have all the neccessary information to display and interact with the app.

Here's a simple code snippet to get list of all running applications

```swift
struct RunningApp: Identifiable, Equatable {
  let id: Int
  let name: String
  let icon: NSImage
  let nsRunningApplication: NSRunningApplication
}

func getRunningApps() -> [RunningApp] {
  let apps = NSWorkspace.shared.runningApplications
    .filter { $0.activationPolicy == .regular } // Only show regular apps (excluding background processes)
    .map { app in
      RunningApp(
        id: Int(app.processIdentifier),
        name: app.localizedName ?? "",
        icon: app.icon ?? NSImage(),
        nsRunningApplication: app
      )
    }
  return apps
}
```

# Display all running applications in a horizontal container

After getting the all the running apps, display them in a horizontal container is an easy task. We just need to create a HStack and display all the app icons there.

Here's a minimal version to get them displayed:

```swift
struct DockIcon: View {
  let application: RunningApp

  var body: some View {
    Image(nsImage: application.icon)
      .resizable()
      .aspectRatio(contentMode: .fit)
  }
}

struct ContentView: View {

  @State var runningApps: [RunningApp] = []

  var body: some View {
    HStack {
      ForEach(runningApps) { app in
        DockIcon(application: app)
      }
    }
    .padding()
  }

}
```

Here's what it looks like:

![Simple horizontal dock with application icons](/assets/how-to-mimic-the-macos-dock-part-1/step1.jpg)

# Make the container looks similar to the Dock container

Next step is to remove the title bar and window buttons. The container should also have a translucent background with rounded corners and a border.
While [`containerBackground`](<https://developer.apple.com/documentation/swiftui/view/containerbackground(_:for:)>) can help with the material background, and [`toolbarBackgroundVisibility`](<https://developer.apple.com/documentation/swiftui/view/toolbarbackgroundvisibility(_:for:)>) for the title bar visibility, there is no way to hide the close, minimize, maximize buttons in the window. On the other hands, you need to set your app to macOS 15 as the minimum support versions as those APIs are only available from macOS 15.

So, we need to go visit our old friend AppKit and use some of its APIs.

First, let make a background view to remove the title bar and window buttons

```swift
struct WindowBackground: NSViewRepresentable {
  func makeNSView(context: Context) -> NSView {
    let view = NSView()

    DispatchQueue.main.async {
      if let window = view.window {
        configureWindow(window, context: context)
      }
    }

    return view
  }

  func updateNSView(_ nsView: NSView, context: Context) {
  }

  private func configureWindow(_ window: NSWindow, context: Context) {
    window.titleVisibility = .hidden
    window.titlebarAppearsTransparent = true
    window.styleMask.remove(.titled)
    window.backgroundColor = .clear
    window.level = .screenSaver
    window.collectionBehavior = [.canJoinAllSpaces, .stationary]
  }
}

struct SecondDock2App: App {
  var body: some Scene {
    WindowGroup {
      ContentView()
        .background(WindowBackground())
    }
    .windowResizability(.contentSize)
  }
}
```

Then, update the container to have the material background with some rounded corners and border

```swift
HStack {
  ForEach(runningApps) { app in
    DockIcon(application: app)
  }
}
.padding(8)
.background {
  RoundedRectangle(cornerRadius: 16, style: .continuous)
    .fill(.ultraThinMaterial)
}
.overlay {
  RoundedRectangle(cornerRadius: 16, style: .continuous)
    .strokeBorder(.white.opacity(0.2), lineWidth: 0.5)
}
```

It should look good now
![Horizontal dock with application icons](/assets/how-to-mimic-the-macos-dock-part-1/step2.jpg)
_The translucent effect failed to shown captured_

# Pin the container to the bottom of the screen

Our last step is to move the container to the bottom of the display to replace the macOS system dock. With the WindowBackground view, we can create a Coordinator to handle callbacks from NSWindowDelegate of our window, and also calculate the correct location to update our window frame. Since we want to pin the container at the bottom of the display, we can calculate the origin point with `x` as `screenFrame.midX - windowFrame.width / 2` and `y` as `screenFrame.minY + padding`. The completed code can be seen below:

```swift
struct WindowBackground: NSViewRepresentable {

  class Coordinator: NSObject, NSWindowDelegate {
    var parent: WindowBackground

    init(_ parent: WindowBackground) {
      self.parent = parent
    }

    func windowDidResize(_ notification: Notification) {
      guard let window = notification.object as? NSWindow else { return }
      recenterWindow(window)
    }

    func recenterWindow(_ window: NSWindow) {
      guard let screen = window.screen else { return }
      let screenFrame = screen.frame
      let windowFrame = window.frame
      let padding = 4.0

      let newOrigin = NSPoint(
        x: screenFrame.midX - windowFrame.width / 2,
        y: screenFrame.minY + padding
      )

      window.setFrameOrigin(newOrigin)
    }
  }

  func makeCoordinator() -> Coordinator {
    Coordinator(self)
  }

  func makeNSView(context: Context) -> NSView {
    let view = NSView()

    DispatchQueue.main.async {
      if let window = view.window {
        configureWindow(window, context: context)
        window.delegate = context.coordinator
      }
    }

    return view
  }

  func updateNSView(_ nsView: NSView, context: Context) {
    if let window = nsView.window {
      context.coordinator.recenterWindow(window)
    }
  }

  private func configureWindow(_ window: NSWindow, context: Context) {
    window.titleVisibility = .hidden
    window.titlebarAppearsTransparent = true
    window.styleMask.remove(.titled)
    window.backgroundColor = .clear
    window.level = .screenSaver
    window.collectionBehavior = [.canJoinAllSpaces, .stationary]
    context.coordinator.recenterWindow(window)
  }
}

```

And this is our result:
![Horizontal dock with application icons](/assets/how-to-mimic-the-macos-dock-part-1/step3.jpg)

What a beautiful dock! Can you even spot the differences?

That's all for our MVP.
