import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    email: z.string().email("올바른 이메일 형식을 입력해주세요."),
    password: z.string().min(8, "비밀번호는 최소 8자 이상이어야 합니다."),
    confirmPassword: z.string(),
    nickname: z.string().min(2, "닉네임은 최소 2자 이상이어야 합니다."),
    }).refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
});

const SignupPage = () => {
    const [page, setPage] = useState(1);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    const onSubmit = (data: any) => {
        console.log("회원가입 데이터:", data);
    };

    const email = watch("email");

    return (
        <div className="flex flex-col items-center justify-center h-full gap-4 bg-black text-white">
        <div className="grid grid-cols-3 w-full max-w-md">
            <button
            className="text-white disabled:cursor-not-allowed"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}>
            {`<`}
            </button>

            <h1 className="flex items-center justify-center text-xl col-span-1">회원가입</h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 items-center">
            {page === 1 && (
            <>
                <input
                {...register("email")}
                type="email"
                placeholder="이메일을 입력해주세요"
                className={`w-[300px] p-2 border rounded-sm ${
                    errors.email ? "border-red-500 bg-red-200" : "border-gray-300"
                }`}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                <button
                type="button"
                onClick={() => setPage(2)}
                disabled={!email || !!errors.email}
                className="w-full bg-[pink] text-white py-2 rounded-md font-medium disabled:bg-gray-400">
                다음
                </button>
            </>
            )}

            {page === 2 && (
            <>
                <p className="text-sm">입력한 이메일: {email}</p>

                <div className="relative">
                <input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호"
                    className={`w-[300px] p-2 border rounded-sm ${
                    errors.password ? "border-red-500 bg-red-200" : "border-gray-300"
                    }`}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute top-2 right-2 text-sm">
                    {showPassword ? "🙈" : "👁️"}
                </button>
                </div>
                
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                <input
                {...register("confirmPassword")}
                type="password"
                placeholder="비밀번호 재확인"
                className={`w-[300px] p-2 border rounded-sm ${
                    errors.confirmPassword ? "border-red-500 bg-red-200" : "border-gray-300"
                }`}
                />
                {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
                )}

                <button
                type="button"
                onClick={() => setPage(3)}
                disabled={!!errors.password || !!errors.confirmPassword}
                className="w-full bg-[pink] text-white py-2 rounded-md font-medium disabled:bg-gray-400">
                다음
                </button>
            </>
            )}

            {page === 3 && (
            <>
                <input
                {...register("nickname")}
                type="text"
                placeholder="닉네임을 입력해주세요"
                className={`w-[300px] p-2 border rounded-sm ${
                    errors.nickname ? "border-red-500 bg-red-200" : "border-gray-300"
                }`}
                />

                {errors.nickname && <p className="text-red-500 text-sm">{errors.nickname.message}</p>}

                <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-md font-medium hover:bg-green-600">
                회원가입 완료
                </button>
            </>
            )}
        </form>
        </div>
    );
};

export default SignupPage;

