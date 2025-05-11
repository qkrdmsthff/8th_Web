import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLpList } from '../apis/lp';
import { Lp } from '../types/lp';

const LpPage = () => {
    const [order, setOrder] = useState<'recent' | 'oldest'>('recent');
    const [lpList, setLpList] = useState<Lp[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const queryOrder = order === 'recent' ? 'asc' : 'desc';

            try {
                const response = await getLpList({
                    cursor: 0,
                    order: queryOrder,
                    limit: 10,
                });

                if (response.data && response.data.data) {
                    setLpList(response.data.data);
                } else {
                    console.log('No data found in response');
                }

                setIsError(false);
            } catch (error) {
                console.error('LP 목록 조회 실패:', error);
                setIsError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [order]);

    const handleLpClick = (lpId: number) => {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            setIsModalOpen(true); // 모달 열기
        } else {
            navigate(`/lp/${lpId}`);
        }
    };

    const handleLoginRedirect = () => {
        navigate('/login');
        setIsModalOpen(false); // 모달 닫기
    };

    if (isLoading) return <p>로딩 중...</p>;
    if (isError) return <div className="mt-20 text-center">조회된 LP가 없습니다.</div>;

    return (
        <div className="flex flex-col h-dvh bg-white items-center text-black">
            <div className="space-x-8 mt-5">
                <button className="text-2xl font-bold">MY LP LIST</button>

                <button
                    onClick={() => setOrder('recent')}
                    className={`px-4 py-2 rounded-sm ${order === 'recent' ? 'bg-gray-500 text-white' : 'bg-gray-200'}`}
                >
                    최신순
                </button>

                <button
                    onClick={() => setOrder('oldest')}
                    className={`px-4 py-2 rounded-sm ${order === 'oldest' ? 'bg-gray-500 text-white' : 'bg-gray-200'}`}
                >
                    오래된순
                </button>
            </div>

            <ul className="grid grid-cols-5 gap-4 mt-6">
                {lpList.map((lp) => (
                    <li
                        key={lp.id}
                        className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                        onClick={() => handleLpClick(lp.id)} 
                    >
                        <img
                            src={lp.thumbnail} 
                            alt={lp.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-100"
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                            <h3 className="text-white text-lg font-semibold">{lp.title}</h3>
                            <p className="text-gray-300 text-sm">
                                {new Date(lp.createdAt).toLocaleDateString()} · 좋아요 {lp.likes.length}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>

            {/* 로그인 모달 */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg text-center">
                        <h2 className="text-lg font-semibold mb-4">로그인이 필요한 서비스입니다!</h2>
                        <p>LP를 보려면 로그인해주세요.</p>
                        <button 
                            onClick={handleLoginRedirect}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                        >
                            로그인 화면으로 이동
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LpPage;
