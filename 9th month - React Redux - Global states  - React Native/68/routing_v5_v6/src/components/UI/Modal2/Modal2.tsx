const Modal2 = ({close, show, title, children}: any) => {
    return (
        <div style={{display: show ? 'block' : 'none'}}>
            <h1>{title}</h1>
            <button onClick={close}>X</button>
            {children}
        </div>
    )
}