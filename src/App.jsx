import { useState } from "react";
import { SquareUser, LaptopMinimalCheck } from "lucide-react";
import "./App.css";

function App() {
	const [user, setUser] = useState("");
	const [computer, setComputer] = useState("");
	const [won, setWon] = useState(10);
	const [lost, setLost] = useState(4);
	const [draw, setDarw] = useState(7);
	const [winner, setWinner] = useState("");
	const [userimg, setUserimg] = useState("");
	const [computerimg, setComputerimg] = useState("");
	const [imageVisible, setImagevisible] = useState(false);
	const [message, setMessage] = useState("");
	const users = [
		{ name: "tony", won: "3", lost: "5", draw: "3" },
		{ name: "bob", won: "2", lost: "1", draw: "3" },
		{ name: "rony", won: "3", lost: "4", draw: "7" },
		{ name: "aliaa", won: "2", lost: "8", draw: "2" },
		{ name: "tony", won: "3", lost: "5", draw: "3" },
		{ name: "bob", won: "2", lost: "1", draw: "3" },
		{ name: "rony", won: "3", lost: "4", draw: "7" },
		{ name: "aliaa", won: "2", lost: "8", draw: "2" },
		{ name: "tony", won: "3", lost: "5", draw: "3" },
		{ name: "bob", won: "2", lost: "1", draw: "3" },
		{ name: "rony", won: "3", lost: "4", draw: "7" },
		{ name: "aliaa", won: "2", lost: "8", draw: "2" },
		{ name: "tony", won: "3", lost: "5", draw: "3" },
		{ name: "bob", won: "2", lost: "1", draw: "3" },
		{ name: "rony", won: "3", lost: "4", draw: "7" },
		{ name: "aliaa", won: "2", lost: "8", draw: "2" },
	];
	const handleStart = () => {
		const computerChoice = Math.ceil(Math.random() * 3);
		const first = "";
		const second = "";

		console.log("random");

		let compChoice = "";
		if (computerChoice === 1) {
			compChoice = "rock";
			setComputerimg("./assets/computer-rock.png");
		} else if (computerChoice === 2) {
			compChoice = "paper";
			setComputerimg("./assets/computer-paper.png");
		} else if (computerChoice === 3) {
			compChoice = "scissor";
			setComputerimg("./assets/computer-scissor.png");
		}
		setComputer(compChoice);

		if (user === "rock") {
			if (compChoice === "rock") {
				setWinner("Draw");
				setDarw(draw + 1);
			} else if (compChoice === "paper") {
				setWinner("You Loose!");
				setLost(lost + 1);
			} else if (compChoice === "scissor") {
				setWinner("You Win!");
				setWon(won + 1);
			}
		} else if (user === "paper") {
			if (compChoice === "rock") {
				setWinner("You Win!");
				setWon(won + 1);
			} else if (compChoice === "paper") {
				setWinner("Draw");
				setDarw(draw + 1);
			} else if (compChoice === "scissor") {
				setWinner("You Loose!");
				setLost(lost + 1);
			}
		} else if (user === "scissor") {
			if (compChoice === "rock") {
				setWinner("You Loose!");
				setLost(lost + 1);
			} else if (compChoice === "paper") {
				setWinner("You Win!");
				setWon(won + 1);
			} else if (compChoice === "scissor") {
				setWinner("Draw");
				setDarw(draw + 1);
			}
		}

		setMessage("rocks beats scissor");

		setTimeout(() => {
			setImagevisible(true);
		}, 1000);
	};

	return (
		<>
			<div className="main-div relative p-4 h-[36rem] w-[96%]  mx-auto rounded-xl  flex flex-col md:flex-row ">
				<div className="inner-div leader-board h-full w-[30%] flex flex-col m-2 rounded-xl border-2 border-gray-300 ">
					<h3 className="text-2xl font-bold self-center  ">LeaderBaord</h3>
					<div className="upper flex justify-around ">
						<div className="">
							<img
								className="h-12 w-12 rounded-full "
								src="./assets/user.png"
								alt=""
							/>{" "}
						</div>
						<h2 className="font-bold text-3xl">VS</h2>
						<img
							className="h-12 w-12 rounded-full "
							src="./assets/computer.png"
							alt=""
						/>{" "}
					</div>
					<div className="lowwer border-b-2 border-gray-400 flex flex-col justify-around gap-2">
						<div className="flex flex-row justify-evenly gap-4">
							<p>Won</p>
							<p>Lost</p>
							<p>Draw</p>
						</div>
						<div className="flex flex-row justify-evenly gap-4">
							<p>{won}</p>
							<p>{lost}</p>
							<p>{draw}</p>
						</div>
					</div>
					<div>
						<ul className="m-4 h-[24rem] overflow-auto ">
							{users.map((user, key) => (
								<li
									key="key"
									className="flex flex-row gap-2 bg-white mb-4 items-center h-16 rounded-xl border-2  p-2"
								>
									<img
										className="h-12 w-12 rounded-full bg-red-200"
										src="./assets/user.png"
										alt=""
									/>
									<p className="text-lg font-semibold">{user.name}</p>
									<p className="text-sm text-gray-500">Won : {user.won}</p>
									<p className="text-sm text-gray-500">Lost : {user.lost}</p>
									<p className="text-sm text-gray-500">Draw : {user.draw}</p>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="display h-full w-[70%] m-2 rounded-xl border-2 border-gray-300 ">
					<h1 className=" h-14 flex justify-center font-bold text-2xl ">
						Rock-Paper-Scissor
					</h1>
					<div className="">
						<div className="flex flex-row justify-evenly">
							<button
								onClick={() => {
									setUser("rock");
									setUserimg("./assets/rock.png");
								}}
								type="button"
								className=""
							>
								<img className="h-28 w-28" src="./assets/rock.png" alt="rock" />
							</button>
							<button
								onClick={() => {
									setUser("paper");
									setUserimg("./assets/paper.png");
								}}
								type="button"
								className=""
							>
								<img
									className="h-28 w-28"
									src="./assets/paper.png"
									alt="paper"
								/>
							</button>
							<button
								onClick={() => {
									setUser("scissor");
									setUserimg("./assets/scissor.png");
								}}
								type="button"
								className=""
							>
								<img
									className="h-28 w-28"
									src="./assets/scissor.png"
									alt="scissor"
								/>
							</button>
						</div>
						<button
							className="flex justify-center items-center p-6 bg-red-500 text-white h-10 w-20 font-bold text-xl rounded-xl mx-auto outline outline-offset-2 outline-red-500 active:outline active:outline-offset-2 hover:outline-green-600 mt-4"
							type="button"
							onClick={handleStart}
						>
							Start
						</button>
						{/* <div className='flex flex-row justify-around'>
							<button type='button'>User Choice : {user}</button><br />
							<button type='button'>Computer Choice : {computer}</button><br />
						</div> */}
						<div className=" place-self-center text-center mt-4 ">
							<p className="text-3xl font-semibold italic ">{winner}</p>
							<p className="text-3xl font-semibold italic">{message}</p>
						</div>

						<div className="flex flex-row bg-red-200 justify-center border-2 w-[40%] rounded-xl mx-auto mt-4 ">
							{imageVisible && (
								<>
									<div className="user-img">
										<img className="h-40 w-40" src={userimg} alt="" />
									</div>
									<div className="computer-img">
										<img className="h-40 w-40" src={computerimg} alt="" />
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
