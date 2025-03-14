function mostrarConteudo(topico) {
    // Esconde todos os conteúdos
    const conteudos = document.querySelectorAll('.conteudo');
    conteudos.forEach(conteudo => conteudo.classList.remove('ativo'));

    // Mostra o conteúdo correspondente
    const conteudoAtivo = document.getElementById(`conteudo-${topico}`);
    if (conteudoAtivo) {
        conteudoAtivo.classList.add('ativo');
    }
}

