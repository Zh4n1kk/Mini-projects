import { ErrorModal } from "../../Components/ErrorModal/ErrorModal";
import { AxiosError, AxiosInstance } from "axios";
import { ComponentType, JSX, useEffect, useState } from "react";

export function withErrorHandler<T extends JSX.IntrinsicAttributes>(
    WrappedComponent: ComponentType<T>,
    axiosClient: AxiosInstance,
) {
    return function WithErrorHandlerWrapper(props: T) {
        const [error, setError] = useState<AxiosError | null>(null);

        useEffect(() => {
            const reqInteceptor = axiosClient.interceptors.request.use((config) => {
                setError(null);
                console.log("hoc req reqInteceptor");
                return config;
            });
            const resInteceptor = axiosClient.interceptors.response.use(
                (res) => {
                    console.log("hoc req resInteceptor");
                    return res;
                },
                (err) => {
                    setError(err);
                    return Promise.reject(err);
                },
            );

            return () => {
                axiosClient.interceptors.request.eject(reqInteceptor);
                axiosClient.interceptors.response.eject(resInteceptor);
            };
        }, []);

        const handleClose = () => {
            setError(null);
        };
        
        return (
            <>
                {error && <ErrorModal message={`${error.message}`} onClose={handleClose} />}
                <WrappedComponent {...props} />
            </>
        );
    };
}
