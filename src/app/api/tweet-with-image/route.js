import { NextResponse } from 'next/server';
import { rwClient } from '@/lib/twitter';

export async function POST(request) {
  try {
    const { image, tweet } = await request.json();

    if (!image) {
      return NextResponse.json(
        { message: 'Image is required' },
        { status: 400 }
      );
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

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error posting tweet:', error);
    return NextResponse.json(
      { message: 'Error posting tweet', error: error.message },
      { status: 500 }
    );
  }
}