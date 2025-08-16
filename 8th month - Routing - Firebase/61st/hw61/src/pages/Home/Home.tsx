import Card from "../../components/Card/Card";
import "./Home.css";
const Home = () => {
	return (
		<div>
			<div className="Home step_away">
				<span className="text-xl">Personal Info:</span>
				<p className="border-left">
					It's a entrance for a big luxorious building.
				</p>
				<p className="border-left">
					Full Name: <span>Isaac Ian</span>
				</p>
				<p className="border-left">Junior Frontend Developer</p>
				<p className="border-left">Location: Kazakhstan, Almaty</p>
				<p className="border-left">
					Email:{" "}
					<a href="mailto:milk@gmail.com" className="border-b">
						milk@gmail.com
					</a>
				</p>
				<p className="border-left">
					Aspiring frontend developer with a strong focus on building modern,
					fast, and user-friendly web applications. Currently deepening my
					skills in React, TypeScript, and Vite, and passionate about clean code
					and intuitive UI/UX.
				</p>
			</div>
			<hr></hr>
			<div className="Stack step_away">
				<span className="text-xl">Current Stack:</span>
				<div className="cards">
					<Card header="CSS">CSS(Flexbox,Grid)</Card>
					<Card header="HTML5">HTML5</Card>
					<Card header="JS + jQuery">JS + jQuery</Card>
					<Card header="TS">TypeScript as it is!</Card>
					<Card header="Next.js">Next.js</Card>
					<Card header="Vite">Vite</Card>
					<Card header="React.js">React.js</Card>
					<Card header="REST API">I can do it!</Card>
					<Card header="UI Libraries">Vite</Card>
				</div>
			</div>
		</div>
	);
};

export default Home;
