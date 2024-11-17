import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        const proof = await request.json()
        // console.log('Received proof from client:', proof)
        
        const requestBody = {
            nullifier_hash: proof.nullifier_hash,
            merkle_root: proof.merkle_root,
            proof: proof.proof,
            verification_level: proof.verification_level, // Add this
            action: process.env.WLD_ACTION_ID, // Make sure this matches your frontend action
            signal: proof.signal || "",
        }

        // console.log('Request body:', requestBody)
        // console.log('Using app_id:', process.env.WLD_APP_ID)
        // console.log('Using action:', process.env.WLD_ACTION_ID)

        const verifyRes = await fetch(`https://developer.worldcoin.org/api/v1/verify/${process.env.WLD_APP_ID}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        })

        const responseText = await verifyRes.text()
        // console.log('World ID raw response:', responseText)

        if (!verifyRes.ok) {
            console.error('Verification failed with status:', verifyRes.status)
            return NextResponse.json(
                { success: false, error: responseText },
                { status: verifyRes.status }
            )
        }

        const data = JSON.parse(responseText)
        
        if (data.success) {
            
            const response = NextResponse.json({ success: true })
            response.cookies.set('verified', 'true', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 // 1 week
            })
            
            return response
        } else {
            return NextResponse.json(
                { success: false, error: data.error },
                { status: 400 }
            )
        }
    } catch (error) {
        console.error('Error during verification:', error)
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        )
    }
}