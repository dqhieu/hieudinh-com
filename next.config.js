/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/(c/C)ompress(x/X)',
        destination: '/compressx',
      },
    ]
  },
}
