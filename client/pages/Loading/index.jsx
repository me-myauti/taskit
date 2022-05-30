import './styles.css'
export default function Loading() {
    return (
        <div className='main'>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}