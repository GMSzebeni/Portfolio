/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async headers() {
      return [
        {
          source: '/send-message',
          headers: [
            {
              key: 'Access-Control-Allow-Origin',
              value: 'http://localhost:3000',
            },
            {
              key: 'Access-Control-Allow-Methods',
              value: 'GET, POST, OPTIONS, PUT, DELETE',
            },
            {
              key: 'Access-Control-Allow-Headers',
              value: 'Origin, X-Requested-With, Content-Type, Accept',
            },
          ],
        },
      ];
    },
  };
