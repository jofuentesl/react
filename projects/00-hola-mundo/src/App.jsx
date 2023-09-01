import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App () {
    return (
        <div className='App'>
        <TwitterFollowCard userName="vxnder" name="Juan Carlos León" />
        <TwitterFollowCard userName="pheralb" name="Loles Antonia" />
        <TwitterFollowCard userName="midudev" name="Martin Garcia" />
        </div>
    )

}
