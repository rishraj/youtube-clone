'use client';

import { useSearchParams } from "next/navigation";
import { Fragment } from "react";

export default function Watch() {
    const videoPrefix = 'https://storage.googleapis.com/rr-yt-processed-videos/';
    const videoSrc = useSearchParams().get('v');

    return (
        <Fragment>
            <h1>Watch Page</h1>
            <video controls src={videoPrefix + videoSrc} />
        </Fragment>
    );
}