export default function CardHero() {
    return <>
    


    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
    <span className="text-3xl font-semibold">R$</span>
    <span className="text-5xl font-extrabold tracking-tight">10,00</span>
    <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/mês</span>
    </div>
    <ul role="list" className="space-y-5 my-7">
    <li className="flex items-center">
    <svg className="flex-shrink-0 w-4 h-4 text-purple-600 dark:text-purple-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">2GB RAM</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-purple-600 dark:text-purple-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">10GB SSD NVMe</span>
    </li>
    <li className="flex">
    <svg className="flex-shrink-0 w-4 h-4 text-purple-600 dark:text-purple-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Suporte 24h/7</span>
    </li>
    <li className="flex line-through decoration-gray-500">
    <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 ms-3">Domínio .com grátis</span>
    </li>
    <li className="flex line-through decoration-gray-500">
    <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 ms-3">Servidores Base grátis</span>
    </li>
    <li className="flex line-through decoration-gray-500">
    <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 ms-3">LeafPlugins grátis</span>
    </li>
    </ul>
    <button type="button" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
    </div>


    </>
}