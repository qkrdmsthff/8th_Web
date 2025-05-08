import { useState } from 'react';
import { Link } from 'react-router-dom';
import useGetLpList from '../hooks/queries/useGetLpList';
import { PAGINATION_ORDER } from '../enums/common';

const LpPage = () => {
    const [order, setOrder] = useState<'recent' | 'oldest'>('recent');

    const { data, isLoading, isError } = useGetLpList({
        cursor : 0,
        search : '',
        order : PAGINATION_ORDER,
        limit: 10,
    });

    if (isLoading) return <p>로딩 중...</p>;
    if (isError || !data) return <p>데이터를 불러올 수 없습니다.</p>;

    return (
        <div className="flex flex-col h-dvh bg-black items-center text-white">
            <div className='space-x-8 mt-5'>
            <button className="text-2xl items-center justify-center font-bold"> MY LP LIST </button>

            <button
                    onClick={() => setOrder('recent')}
                    className={`px-4 py-2 rounded-sm ${order === 'recent' ? 'bg-pink-500 text-white' : 'bg-gray-200'}`}
                    >
                        최신순
                    </button>
                            
                    <button
                    onClick={() => setOrder('oldest')}
                    className={`px-4 py-2 rounded-sm ${order === 'oldest' ? 'bg-pink-500 text-white' : 'bg-gray-200'}`}
                    >
                        오래된순
                    </button>
            </div>

        <ul className="space-y-4">
            {data.items?.map((lp: any) => (
            <li key={lp.id} className="border p-4 rounded shadow">
                <h2 className="text-xl font-semibold">{lp.title}</h2>
                <p className="text-gray-600">{lp.description}</p>
                <Link
                to={`/lp/${lp.id}`}
                className="text-blue-500 hover:underline mt-2 inline-block"
                >
                상세보기 →
                </Link>
            </li>
            ))}
        </ul>

        {data.nextCursor && (
            <div className="mt-6 text-center">
            <button
                disabled
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
            >
                더 보기 (준비 중)
            </button>
            </div>
        )}
        </div>
    );
};

export default LpPage;
