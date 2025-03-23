import localFont from 'next/font/local'

export const circularSpotifyText = localFont({
  src: [
    {
      path: './circular-spotify-text-font/CircularSpotifyText-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './circular-spotify-text-font/CircularSpotifyText-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './circular-spotify-text-font/CircularSpotifyText-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './circular-spotify-text-font/CircularSpotifyText-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './circular-spotify-text-font/CircularSpotifyText-Light.otf',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-circular-spotify-text',
})

export const sfProDisplay = localFont({
  src: [
    {
      path: './sf-pro-display/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-sf-pro-display',
})
