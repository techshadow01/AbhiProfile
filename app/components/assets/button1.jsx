import React from 'react'

const button1 = () => {
    return (
        <div class="flex items-center justify-center bg-gray-900">
            <div className=''>
                <button
                    class="relative inline-block p-px font-semibold leading-6 text-white no-underline bg-gray-800 shadow-2xl cursor-pointer group rounded-full shadow-zinc-900"><span
                        class="absolute inset-0 overflow-hidden rounded-xl"><span
                            class="absolute inset-0 rounded-xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                        </span>
                    </span>
                    <div
                        class="relative z-10 flex items-center px-6 py-3 space-x-2 rounded-full bg-gray-950/50 ring-1 ring-white/10 ">
                        RESUME
                    </div>
                    <span
                        class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-gray-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                </button>
            </div>
        </div>
    )
}

export default button1