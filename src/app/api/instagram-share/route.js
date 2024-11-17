// // app/api/instagram-share/route.js
// import { NextResponse } from 'next/server';
// import sharp from 'sharp';

// export async function POST(request) {
//     try {
//         const { image, caption } = await request.json();

//         // Convert base64 to buffer
//         const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
//         const imageBuffer = Buffer.from(base64Data, 'base64');

//         // Process image using sharp
//         const processedImageBuffer = await sharp(imageBuffer)
//             .resize({
//                 width: 1080, // Instagram recommended width
//                 height: 1080, // Square format for better compatibility
//                 fit: 'contain',
//                 background: { r: 0, g: 0, b: 0 } // Black background
//             })
//             .jpeg({
//                 quality: 80,
//                 chromaSubsampling: '4:4:4' // Better quality
//             })
//             .toBuffer();

//         // Convert processed buffer to base64 for API
//         const processedBase64 = processedImageBuffer.toString('base64');

//         // Instagram Graph API configuration
//         const instagramAccountId = process.env.INSTAGRAM_ACCOUNT_ID;
//         const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

//         // Step 1: Create container for the media object
//         const containerResponse = await fetch(
//             `https://graph.facebook.com/v21.0/${instagramAccountId}/media`,
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     image_url: `data:image/jpeg;base64,${processedBase64}`,
//                     caption: caption,
//                     access_token: accessToken,
//                 }),
//             }
//         );

//         const containerData = await containerResponse.json();

//         if (!containerData.id) {
//             throw new Error('Failed to create media container');
//         }

//         // Step 2: Publish the container
//         const publishResponse = await fetch(
//             `https://graph.facebook.com/v21.0/${instagramAccountId}/media_publish`,
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     creation_id: containerData.id,
//                     access_token: accessToken,
//                 }),
//             }
//         );

//         const publishData = await publishResponse.json();

//         if (!publishData.id) {
//             throw new Error('Failed to publish media');
//         }

//         return NextResponse.json({
//             success: true,
//             message: 'Successfully shared to Instagram',
//             postId: publishData.id
//         });

//     } catch (error) {
//         console.error('Instagram sharing error:', error);
//         return NextResponse.json(
//             {
//                 success: false,
//                 message: error.message || 'Failed to share to Instagram'
//             },
//             { status: 500 }
//         );
//     }
// }