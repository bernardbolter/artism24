const Minus = ({accordianOpen}) => {
    return (
        <div className={accordianOpen ? 'minus-container minus-container-turned' : 'minus-container'}>
            <svg  viewBox="0 0 24 24">
                <path d="M6 12L18 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

export default Minus