import React from 'react';

function NoResult({ title = "No results found." }) {
    return (
        <div className="no-results mb-5 mt-5 p-5">
            <div className="no-results-icon d-flex flex-column justify-center align-items-center">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="80px" 
                    height="80px" 
                    viewBox="0 0 32 32" 
                    enableBackground="new 0 0 32 32" 
                    version="1.1" 
                    xmlSpace="preserve"
                >
                    <g id="Files_Folder40" />
                    <g id="Files_Folder39" />
                    <g id="Files_Folder38" />
                    <g id="Files_Folder37" />
                    <g id="Files_Folder36" />
                    <g id="Files_Folder35" />
                    <g id="Files_Folder34" />
                    <g id="Files_Folder33" />
                    <g id="Files_Folder32" />
                    <g id="Files_Folder31" />
                    <g id="Files_Folder30" />
                    <g id="Files_Folder29" />
                    <g id="Files_Folder28" />
                    <g id="Files_Folder27" />
                    <g id="Files_Folder26" />
                    <g id="Files_Folder25" />
                    <g id="Files_Folder24" />
                    <g id="Files_Folder23" />
                    <g id="Files_Folder22" />
                    <g id="Files_Folder21" />
                    <g id="Files_Folder20" />
                    <g id="Files_Folder19" />
                    <g id="Files_Folder18" />
                    <g id="Files_Folder17" />
                    <g id="Files_Folder16" />
                    <g id="Files_Folder15" />
                    <g id="Files_Folder14" />
                    <g id="Files_Folder13" />
                    <g id="Files_Folder12" />
                    <g id="Files_Folder11" />
                    <g id="Files_Folder10" />
                    <g id="Files_Folder09" />
                    <g id="Files_Folder08" />
                    <g id="Files_Folder07" />
                    <g id="Files_Folder06">
                        <g>
                            <g>
                                <path d="M26.76,8.35L26.46,8L21,1.63l-0.24-0.28C20.57,1.13,20.29,1,20,1h-1H6C5.45,1,5,1.45,5,2v28 c0,0.55,0.45,1,1,1h20c0.55,0,1-0.45,1-1V10V9C27,8.76,26.92,8.53,26.76,8.35z" fill="#FFC10A" />
                            </g>
                            <g>
                                <g>
                                    <path d="M27,9v1h-7c-0.55,0-1-0.45-1-1V1h1c0.29,0,0.57,0.13,0.76,0.35L21,1.63L26.46,8l0.3,0.35 C26.92,8.53,27,8.76,27,9z" fill="#FE9803" />
                                </g>
                            </g>
                        </g>
                        <g>
                            <path d="M16,22c-0.5522,0-1-0.4478-1-1v-8c0-0.5522,0.4478-1,1-1s1,0.4478,1,1v8C17,21.5522,16.5522,22,16,22z" fill="#FE9803" />
                        </g>
                        <g>
                            <path d="M16,26c-0.5522,0-1-0.4478-1-1v-1c0-0.5522,0.4478-1,1-1s1,0.4478,1,1v1C17,25.5522,16.5522,26,16,26z" fill="#FE9803" />
                        </g>
                    </g>
                    <g id="Files_Folder05" />
                    <g id="Files_Folder04" />
                    <g id="Files_Folder03" />
                    <g id="Files_Folder02" />
                    <g id="Files_Folder01" />
                </svg>
                <p className=' fw-bold fs-4'>{title}</p>
            </div>
           
        </div>
    );
}

export default NoResult;
