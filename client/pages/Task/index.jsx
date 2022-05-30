import './styles.css'
import CheckIcon from '../../assets/CheckIcon'
import CloseIcon from '../../assets/CloseIcon'
import EditIcon from '../../assets/EditIcon'

export default function Task() {
    return (
        <div className="main">
            <div className="task-box">
                <h2 className='title'>Tasks</h2>
                <div className="task">
                    <div className="task-content">
                        <p>Comprar abacate bananinha</p>
                    </div>
                    <div className="check">
                        <i className='icon'>
                            <button className='button'>
                                <CheckIcon />
                            </button>
                        </i>
                        <i className="icon">
                            <button className='button'>
                                <CloseIcon />
                            </button>
                        </i>
                        <i className="icon">
                            <button className='button'>
                                <EditIcon />
                            </button>
                        </i>
                    </div>
                </div>
                <div className="task">
                    <div className="task-content">
                        <p>Comprar abacate bananinha</p>
                    </div>
                    <div className="check">
                        <i className='icon'>
                            <button className='button'>
                                <CheckIcon />
                            </button>
                        </i>
                        <i className="icon">
                            <button className='button'>
                                <CloseIcon />
                            </button>
                        </i>
                        <i className="icon">
                            <button className='button'>
                                <EditIcon />
                            </button>
                        </i>
                    </div>
                </div>
                <div className="task">
                    <div className="task-content">
                        <p>Comprar abacate bananinha</p>
                    </div>
                    <div className="check">
                        <i className='icon'>
                            <button className='button'>
                                <CheckIcon />
                            </button>
                        </i>
                        <i className="icon">
                            <button className='button'>
                                <CloseIcon />
                            </button>
                        </i>
                        <i className="icon">
                            <button className='button'>
                                <EditIcon />
                            </button>
                        </i>
                    </div>
                </div>
            </div>
        </div>
    )
}