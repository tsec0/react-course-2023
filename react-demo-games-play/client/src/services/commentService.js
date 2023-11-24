import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';

// all comments for a particular game
export const getAll = async (gameId) => {
    
    const query = new URLSearchParams({
        where: `gameId="${gameId}"`
    });

    const result = await request.get(`${baseUrl}?${query}`);

    // Wrong -> Advanced retrieval should be implemented
    // return result.filter(comment => comment.gameId === gameId);
    return result;
}

export const create = async (gameId, username, text) => {
    const newComment = await request.post(baseUrl, {
        gameId,
        username,
        text,
    });

    return newComment;
}