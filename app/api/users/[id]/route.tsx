import { NextRequest, NextResponse } from "next/server";
import schema from '../schema';
import prisma from '../../../../prisma/client';

export async function GET(
    request: NextRequest, 
    { params }: { params: { id: string } }
) {
    // fetch data from a db
    // if not found, return 404 error
    // else return data
    const user = await prisma.user.findUnique({
        where: { id: params.id }
    })
    if (!user) return NextResponse.json(
        { error: 'User not found'},
        {status: 404},
    )
    return NextResponse.json(user)
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    // validate request body
    const body = await request.json();
    // in invalid return 400
    const validation = schema.safeParse(body);

    if (!validation.success) return NextResponse.json(
        validation.error.errors,
        { status: 400 },
    );

    const user = await prisma.user.findUnique({
        where: { id: params.id }
    })
    // if doesn't exist, return 404

    if (!user) return NextResponse.json(
        {error: 'User not found'},
        {status: 404},
    )
    // fetch user with the given id
    const updatedUser =  await prisma.user.update({
        where: { id: user.id },
        data: {
            name: body.name,
            email: body.email
        }
    });
    return NextResponse.json(updatedUser)
    // udate the user
    // return the updated user
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {

    const user = await prisma.user.findUnique({
        where: { id: params.id }
    });

    // if no user return 404
    if (!user) return NextResponse.json(
        {error: 'User not found'},
        {status: 404},
    )

    await prisma.user.delete({
        where: { id: user.id }
    })

    return NextResponse.json({})
    // delete user
    // return 200
}
