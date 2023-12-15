"use client";

import { useSearchParams } from "next/navigation";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const [password, setPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string>("");
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword: string = event.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
    };

    const validatePassword = (value: string) => {
    const passwordRegex: RegExp =
        /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>0-9]).{8,16}$/;

    if (passwordRegex.test(value)) {
        setPasswordError("");
    } else {
        setPasswordError(
        "La contraseña debe tener entre 8 y 16 caracteres, al menos una mayúscula, un carácter especial y un número."
        );
    }
    };

    const handleInputFocus = () => {
    setIsInputFocused(true);
    };

    const handleInputBlur = () => {
    setIsInputFocused(false);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    };

    return (
    <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded w-full max-w-[420px] p-4 md:p-8">
        <img
            src="Group.svg"
            alt="icono"
            className="mb-8"
            style={{ width: "29.74px", height: "40-px" }}
        />
        <h4 className="font-roboto text-center text-grayblue-900 font-bold text-xl mb-4">
            Hola, bienvenido a Helpme!
        </h4>
        <h4 className="font-roboto text-grayblue-900 text-sm text-left font-semibold mb-4">
            Para continuar, te invitamos a iniciar sesión
        </h4>

        <form>
            <div className="mb-4">
            <label
                htmlFor="email"
                className="text-sm font-roboto font-semibold text-grayblue-700 mb-1"
            >
                Correo Electrónico
            </label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@email.com"
                className={`w-full h-10 border font-roboto rounded-md transition-all focus:outline-none ${
                isInputFocused
                    ? "border-gray-500 text-grayblue-700"
                    : "border-pink-200 text-grayblue-700"
                } placeholder:font-roboto placeholder:text-sm placeholder:font-normal placeholder-grayblue-900 placeholder-opacity-50`}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
            />
            </div>

            <div className="mb-2">
            <label
                htmlFor="password"
                className="text-sm font-semibold font-roboto text-grayblue-700 mb-1"
            >
                Contraseña
            </label>
            <input
                type="password"
                id="password"
                name="password"
                className={`w-full h-10 border font-roboto rounded-md transition-all focus:outline-none
                    ${
                        isInputFocused
                        ? "border-gray-500 text-grayblue-700"
                        : "border-pink-200 text-grayblue-700"
                    }
                    ${passwordError ? "border-red-500" : ""}
                    placeholder:font-roboto placeholder:text-sm placeholder:font-normal placeholder-grayblue-900 placeholder-opacity-50`}
                placeholder="Ingrese una contraseña"
                onChange={handlePasswordChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                required
            />
            {passwordError && (
                <p className="text-error-400 text-sm mt-1">{passwordError}</p>
            )}
            </div>

            <div className="flex items-center gap-2 justify-between mb-8">
            <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label
                htmlFor="remember"
                className="text-sm font-roboto text-grayblue-700 font-normal"
                >
                Recordarme
                </label>
            </div>
            <a
                href="#"
                className="text-sm text-grayblue-700 font-roboto font-normal text-center "
            >
                Olvide mi contraseña
            </a>
            </div>

            <button
            type="submit"
            className="bg-pink-400 font-roboto text-white text-sm font-medium opacity-30 p-2 rounded-md w-full mb-7"
            >
            Iniciar Sesión
            </button>
        </form>

        <p className="text-sm font-roboto text-center text-grayblue-700 font-normal">
            Aún no tengo una cuenta.{" "}
            <a
            href="#"
            className="text-[14px] leading-4 font-roboto text-center text-grayblue-700 font-extrabold"
            >
            Comunicate con soporte Helpme!
            </a>
        </p>
        </div>
    </div>
    );
};

export default Login;