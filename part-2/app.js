function App(){
    return (
        <div>
            <Tweet
                username="changster"
                name="Amber"
                date={new Date().toDateString()}
                message="Hello from the otter side"
            />
            <Tweet
                username="JoeJoe"
                name="Joe"
                date={new Date().toDateString()}
                message="Taco Tuesday y'all!!"
            />
            <Tweet
                username="birdlvr2"
                name="Oliver"
                date={new Date().toDateString()}
                message="Learning to whistle the Andy Griffith Theme Song!"
            />
        </div>
        
    );
}
