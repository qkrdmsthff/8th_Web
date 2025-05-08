import { useQuery } from '@tanstack/react-query';
import { PaginationDto } from '../../types/common';
import { getLpList } from '../../apis/lp';
import { QUERY_KEY } from '../../constants/key';

function useGetLpList(params: PaginationDto) {
    const { cursor, search, order, limit } = params;

    return useQuery({
        queryKey: [QUERY_KEY.lps, search || '', order || 'recent', cursor || null],
        queryFn: () => getLpList({
            cursor,
            search,
            order,
            limit,
        }),
        
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,
    });
}

export default useGetLpList;
