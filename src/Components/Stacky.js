import "./Stacky.css";

const Stacky = ({title, icon, body}) =>{
    return(
        <div className="stack-container">
            <div className="stack-icon">
                {icon}
                <div className="stack-title">
                    {title}
                    <div className="stack-body">
                        {body}
                    </div>
                </div>

            </div>

        </div>
        
    );
}

export default Stacky;