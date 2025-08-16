import Card from "../../components/Card/Card";

const Hobbies = () => {
	return (
		<div>
			<div className="hobbies step_away">
				<p className="hobbies_music text-xl">Producing / Music Making</p>
				<p className="hobbies_music">
					I spend around 7 years making{" "}
					<a
						target="_blank"
						href="https://open.spotify.com/artist/6j8MUajI45sF3SmzNezEni"
						className="border-b"
					>
						music
					</a>
				</p>
				<div className="cards">
					<Card header="DAWS IN USE">Fl Studio, Ableton, Logic,Reaper</Card>
					<Card header="Mixing">Learned mixing from scratch</Card>
					<Card header="Mastering">
						Still trying to behave this skill like a beast
					</Card>
					<Card header="Volume leveling">
						Make it sound clean without making it loud
					</Card>
					<Card header="Gain staging">You'll hear everything naturally</Card>
					<Card header="Precise EQ'ing">I'll make it warmer & brighter</Card>
				</div>
			</div>
			<hr></hr>
			<div className="hobby_videogames">
				<p className="text-xl">Videogames</p>
				<p>I started playing games since i was kid, from when i was 6</p>
				<div className="cards">
					<Card header="Warcraft series">
						Warcraft III: Frozen Throne & World of Warcraft: Lich King,Mists Of
						Pandaria and etc.
					</Card>
					<Card header="CS">
						CS 1.6,CS:SOURCE,CS:GO,CS2, I spend many & many hours in there
					</Card>
					<Card header="Minecraft">
						Tracking every released update, sometimes gathering with friends to
						complete it one more time
					</Card>
					<Card header="GTA">
						Currently waiting for GTA 6 and when it comes out i'll get sick
					</Card>
					<Card header="COD & BF">
						Call Of Duty & Battlefield taking a special place in my heart too
					</Card>
					<Card header="Indie Games">
						When AAA games suck i'm playing indie games, i completed games such
						as Undertale,Darkest Dungeon and etc.
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Hobbies;
