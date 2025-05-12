import {musicRequest} from '@/utils/http';

export const getMusicListApi = async (word:string) => {
  return musicRequest.get('/v2/music/netease', {
    params: {
      word: word
    }
  });
};
export const getMusicApi = async (id:number) => {
  return musicRequest.get('/v2/music/netease', {
    params: {
      id: id,
      quality: 1
    }
  });
};
