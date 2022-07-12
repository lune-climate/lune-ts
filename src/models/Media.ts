/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Media = {
    /**
     * The type of the media item
     */
    type: Media.type
    /**
     * The URL of the media item
     */
    url: string
}

export namespace Media {
    /**
     * The type of the media item
     */
    export enum type {
        IMAGE = 'image',
        VIDEO = 'video',
    }
}
