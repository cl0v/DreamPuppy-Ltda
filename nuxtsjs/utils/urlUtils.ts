
/**
 * Atualiza ou adiciona um parâmetro de consulta na URL
 * @param {string} key - O nome do parâmetro de consulta
 * @param {string} value - O valor do parâmetro de consulta
 */
export function updateQueryStringParameter(key: string, value: string) {
    // Obtém a URL atual
    let url = new URL(window.location.href);

    // Atualiza o parâmetro de consulta
    url.searchParams.set(key, value);

    // Substitui o estado da URL sem recarregar a página
    window.history.replaceState({}, '', url.toString());
}