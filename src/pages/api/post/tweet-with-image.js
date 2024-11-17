import { rwClient } from '@/lib/twitter';

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { image, tweet } = req.body;

    if (!image) {
      return res.status(400).json({ message: 'Image is required' });
    }

    // Convert base64 image to buffer
    const imageBuffer = Buffer.from(
      image.replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    );

    // Upload media to Twitter
    const mediaId = await rwClient.v1.uploadMedia(imageBuffer, {
      mimeType: 'image/png',
    });

    // Post tweet with media
    const response = await rwClient.v2.tweet({
      text: tweet || '',
      media: { media_ids: [mediaId] },
    });

    return res.status(200).json(response);
  } catch (error) {
    console.error('Error posting tweet:', error);
    return res.status(500).json({ 
      message: 'Error posting tweet', 
      error: error.message 
    });
  }
}