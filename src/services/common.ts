/**
 * RestApiにアクセスする
 * @param path URL
 * @param init RequestInit
 * @returns Promise
 */
export function fetchApi<TResponse>(path: string, init: RequestInit): Promise<TResponse> {
    return new Promise<TResponse>((resolve, reject) => {
        fetch(path, init)
            .then((response: Response) => {
                if (!response.ok) {
                    reject({
                        unexpected: {
                            status: response.status,
                            statusText: response.statusText,
                        }
                    });
                }
                resolve(response.json());                
            })
            .catch((e: Error) => {
                reject({
                    internal: e
                });
            });
    });
}