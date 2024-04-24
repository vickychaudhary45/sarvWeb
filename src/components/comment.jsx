import '../assets/css/comment.css'
import {BiSolidCaretRightCircle,BiSolidCaretLeftCircle} from 'react-icons/bi'
import {ImQuotesLeft} from 'react-icons/im'
import {FaUserCircle} from 'react-icons/fa'
import {GrStar,GrStarOutline} from 'react-icons/gr'

const Comment = () =>{


    
    return (
       <div className='comments'>
        <div className="commentHeader">
           <h2><span>Real Stories,</span> Honest Reviews Your Trusted Guide!</h2>
           <div className="buttons">
            <i><BiSolidCaretLeftCircle /></i>
            <i><BiSolidCaretRightCircle /></i>
           </div>
        </div>
        <div className="usercomments">
        <div className="commentcard">
            <i><ImQuotesLeft /></i>
            <p className="commentLine">My recent travel experience was simply extraordinary!
             From start to finish, everything exceeded my expectations. The accommodation was luxurious, 
            the sights were breathtaking, and the activities were so much fun.</p>
            <div className="profile">
                <i className="avatar"><FaUserCircle /></i>
                <div className="userDetails">
                    <p className="user-name">Ramesh kumar</p>
                    <div className="ratings">
                        <i><GrStar /></i>
                        <i><GrStar /></i>
                        <i><GrStar /></i>
                        <i><GrStar /></i>
                        <i><GrStarOutline /></i>
                    </div>

                </div>
            </div>
        </div>
        <div className="commentcard">
            <i><ImQuotesLeft /></i>
            <p className="commentLine">My recent travel experience was simply extraordinary!
             From start to finish, everything exceeded my expectations. The accommodation was luxurious, 
            the sights were breathtaking, and the activities were so much fun.</p>
            <div className="profile">
                <i className="avatar"><FaUserCircle /></i>
                <div className="userDetails">
                    <p className="user-name">Sagar G</p>
                    <div className="ratings">
                        <i><GrStar /></i>
                        <i><GrStar /></i>
                        <i><GrStar /></i>
                        <i><GrStarOutline /></i>
                        <i><GrStarOutline /></i>
                    </div>

                </div>
            </div>
        </div>
        <div className="commentcard">
            <i><ImQuotesLeft /></i>
            <p className="commentLine">My recent travel experience was simply extraordinary!
             From start to finish, everything exceeded my expectations. The accommodation was luxurious, 
            the sights were breathtaking, and the activities were so much fun.</p>
            <div className="profile">
                <i className="avatar"><FaUserCircle /></i>
                <div className="userDetails">
                    <p className="user-name">Akshay Singh</p>
                    <div className="ratings">
                        <i><GrStar /></i>
                        <i><GrStar /></i>
                        <i><GrStar /></i>
                        <i><GrStar /></i>
                        <i><GrStar /></i>
                    </div>

                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Comment