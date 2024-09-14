<template>
    <footer class="fixed-footer bg-white rounded-lg shadow m-4 text-black">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <ULink to="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src="/logo.png" class="h-12" alt="iPets Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap">DreamPuppy</span>
                </ULink>
                <ul
                    class="visited:text-gray-500 flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <ULink to="/about" class="hover:underline me-4 md:me-6">{{ $t('messages.footer.about') }}</ULink>
                    </li>
                    <li>
                        <ULink to="/privacidade" class="hover:underline me-4 md:me-6">{{ $t('messages.footer.policy') }}</ULink>
                    </li>
                    <li>
                        <ULink to="/termos" class="hover:underline me-4 md:me-6">{{ $t('messages.footer.terms') }}</ULink>
                    </li>
                    <li>
                        <ULink to="/faq" class="hover:underline me-4 md:me-6">{{ $t('messages.footer.faq') }}</ULink>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=5533997312898&text=Preciso de Ajuda!" class="hover:underline">{{ $t('messages.footer.contact') }}</a>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2021 <NuxtLink
                    href="/" class="hover:underline">DreamPuppy Ltda</NuxtLink>. Todos os direitos reservados.</span>
        </div>
    </footer>
</template>

<style>

footer {
    clear: both;
    position: relative;
    bottom: 0;
    /* position: absolute; */
  /* width: 100%; */
  /* height: 50px; */
}

a:visited {
  color: inherit; /* ou a cor desejada */
  text-decoration: none; /* remove o sublinhado, se necessário */
}
</style>