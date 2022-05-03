<template>
    <div class="min-h-screen relative">
        <div class="container px-2 mx-auto">
            <div class="flex flex-row flex-wrap">
                <AtomsBaseSidebar />
                <main role="main" class="w-full sm:w-2/3 md:w-3/4 px-8 pt-10 pb-40 shadow-lg">
                    <Nuxt />
                </main>
            </div>
        </div>
        <AtomsBaseFooter />
    </div>
</template>