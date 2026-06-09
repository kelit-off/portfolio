"use client";

import { BiLogoVisualStudio } from "react-icons/bi";
import TypingEffect from "./components/typingEffect";
import { SiGit, SiJavascript, SiLaravel, SiMysql, SiNodedotjs, SiPhp, SiPostman, SiPython, SiReact, SiTypescript } from "react-icons/si";
import GitHubCalendar from "react-github-calendar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import axios from "axios";
import React, { useState } from "react";

export default function Home() {
	const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
	const [loading, setLoading] = useState(false);

	const cardLanguages = [
		{ name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
		{ name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
		{ name: "React", icon: SiReact, color: "#61dafb" },
		{ name: "Node.js", icon: SiNodedotjs, color: "#339933" },
		{ name: "Laravel", icon: SiLaravel, color: "#ff2d20" },
		{ name: "PHP", icon: SiPhp, color: "#777BB4" },
		{ name: "MySQL", icon: SiMysql, color: "#00758f" },
		{ name: "Python", icon: SiPython, color: "#3776AB" }

	];


	const cardTools = [
		{ name: "Visual Studio Code", icon: BiLogoVisualStudio, color: "#007ACC" }, // Bleu VSCode
		{ name: "Postman", icon: SiPostman, color: "#FF6C37" },                     // Orange Postman
		{ name: "Git", icon: SiGit, color: "#F05032" },                             // Orange Git
	];

	const cardProjets = [
		{ name: "Fulgure", image: "", description: "Moteur de recherche open source", linkDemo: "", linkGitHub: "" },
		{ name: "NxHost", image: "", description: "Hébergement web open source", linkDemo: "https://nxhost.fr", linkGitHub: "https://github.com/NxHostFR" },
		{ name: "MVC", image: "", description: "Modèle MVC en PHP", linkDemo: "", linkGitHub: "" },
		{ name: "NxTransfert", image: "", description: "Un outil qui permet de transférer un fichier volumineux, avec un lien actif pendant 30 jours.", linkDemo: "https://nxtransfert.com/", linkGitHub: "https://github.com/kelit-off/NxTransfert" }
	]

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setStatus("idle");

		const form = e.currentTarget as HTMLFormElement;

		const formData = {
			name: (form.elements.namedItem("name") as HTMLInputElement).value,
			email: (form.elements.namedItem("email") as HTMLInputElement).value,
			message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
		};

		const reponse = await axios.post("/api/contact", JSON.stringify(formData))

		if (reponse.status == 200) {
			setStatus("success");
			form.reset();
		} else if (reponse.status == 500) {
			setStatus("error");
		}

		setLoading(false);
	}

	return (
		<>
			<header className="shadow-md">
				<div className="container mx-auto px-4 py-6">
					<h1 className="text-3xl font-bold text-gray-800">Théo Killian</h1>
				</div>
			</header>

			<main className="container mx-auto px-4 py-10 space-y-16">
				{/* Hero */}
				<section className="flex flex-col md:flex-row items-center gap-10">
					<div className="space-y-4">
						<h2 className="text-xl text-gray-600">Bonjour à toi! <span className="inline-block text-4xl animate-bounce">👋🏻</span></h2>
						<h1 className="text-4xl font-bold text-gray-900">Je suis <span className="uppercase text-blue-600">Théo Killian</span></h1>
						<div className="text-lg text-gray-700">
							<TypingEffect
								texts={["Développeur FullStack", "Développeur React", "Développeur Laravel", "Développeur PHP"]}
								typingSpeed={150}
								deletingSpeed={150}
								pauseTime={150}
							/>
						</div>
					</div>
					<div className="w-1/2">
						{/* Image de moi entrain de dev */}
					</div>
				</section>

				{/* À propos */}
				<section>
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">Je me présente</h2>
					<div className="space-y-4 text-gray-700">
						<p>J&apos;ai commencé la programmation vers l&apos;âge de 15 ans...</p>
						<p>Pour approfondir mes compétences...</p>
						<p>
							Ce moteur de recherche s&apos;appelle <strong>Fulgure</strong>. Vous pouvez consulter le code sur{" "}
							<a className="text-blue-500 hover:underline" href="https://github.com/orgs/Fulgure/repositories" target="_blank" rel="noreferrer">
								GitHub
							</a>.
						</p>
					</div>
				</section>

				{/* Compétences */}
				<section>
					<h2 className="text-2xl font-semibold text-gray-800 mb-6">Mes compétences</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
						{cardLanguages.map((language, index) => {
							const Icon = language.icon;
							return (
								<div key={index} className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center gap-2">
									<Icon className="text-4xl" style={{ color: language.color }} />
									<span className="text-sm font-medium text-[gray-700]">{language.name}</span>
								</div>
							);
						})}
					</div>
				</section>

				{/* Outils */}
				<section>
					<h2 className="text-2xl font-semibold text-gray-800 mb-6">Mes outils</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
						{cardTools.map((tool, index) => {
							const Icon = tool.icon;
							return (
								<div key={index} className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center gap-2">
									<Icon className="text-4xl" style={{ color: tool.color }} />
									<span className="text-sm font-medium text-gray-700">{tool.name}</span>
								</div>
							);
						})}
					</div>
				</section>

				{/* GitHub Calendar */}
				<section>
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">Mes jours de code</h2>
					<GitHubCalendar username="kelit-off" blockSize={15} blockMargin={5} fontSize={16} colorScheme="light" />
				</section>

				{/* Projets */}
				<section>
					<h2 className="text-2xl font-semibold text-gray-800 mb-6">Mes projets</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{cardProjets.map((projet, index) => (
							<div key={index} className="bg-white p-6 rounded-2xl shadow-md space-y-3">
								<h3 className="text-xl font-semibold text-gray-900">{projet.name}</h3>
								<p className="text-gray-600">{projet.description}</p>
								<div className="flex gap-4 mt-2">
									{projet.linkDemo && (
										<a href={projet.linkDemo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
											Voir la démo
										</a>
									)}
									{projet.linkGitHub && (
										<a href={projet.linkGitHub} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:underline">
											Code source
										</a>
									)}
								</div>
							</div>
						))}
					</div>
				</section>

				{/* Contact */}
				<section id="contact" className="py-10">
					<h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
						Me contacter
					</h2>
					<p className="text-center text-gray-600 mb-8">
						Une question, une collaboration, ou simplement envie d’échanger ?
						N’hésite pas à m’écrire !
					</p>

					<div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-md">
						<form
							onSubmit={onSubmit} // ⚠️ remplace par ton lien Formspree ou endpoint perso
							method="POST"
							className="space-y-4"
						>
							<div>
								<label htmlFor="name" className="block text-gray-700 mb-1">
									Nom
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>

							<div>
								<label htmlFor="email" className="block text-gray-700 mb-1">
									Adresse e-mail
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-gray-700 mb-1">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									required
									className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
								></textarea>
							</div>

							<button
								type="submit"
								className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
							>
								{loading ? "Envoi..." : "Envoyer le message"}
							</button>

							{status === "success" && <p className="mt-4 text-green-600 text-center font-medium">Merci ! Votre message a été envoyé avec succès.</p>}
							{status === "error" && <p className="mt-4 text-red-600 text-center font-medium">Oups ! Une erreur est survenue. Veuillez réessayer.</p>}

						</form>

						{/* Liens sociaux */}
						<div className="flex justify-center gap-6 mt-8 text-2xl text-gray-700">
							<a
								href="mailto:theo.killian@example.com"
								className="hover:text-blue-600 transition"
								title="Envoyer un e-mail"
							>
								<IoIosMail />
							</a>
							<a
								href="https://github.com/kelit-off"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-gray-900 transition"
								title="GitHub"
							>
								<FaGithub />
							</a>
							<a
								href="https://www.linkedin.com/in/theo-killian"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:text-blue-700 transition"
								title="LinkedIn"
							>
								<FaLinkedin />
							</a>
						</div>
					</div>
				</section>
			</main>

			<footer className="text-center py-6 mt-16 text-gray-500 text-sm">
				© {new Date().getFullYear()} Théo Killian — Tous droits réservés.
			</footer>
		</>
	);
}