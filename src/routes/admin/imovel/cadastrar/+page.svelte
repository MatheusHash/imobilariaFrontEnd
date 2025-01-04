<script lang="ts">
	import { Button, Checkbox, Heading, Input, Label, Select, Textarea } from 'flowbite-svelte';
	import type { Imovel } from '../$types';
	import { CheckOutline, ArrowRightAltOutline, ArrowRightOutline } from 'flowbite-svelte-icons';

	let imovel: Imovel = {
		title: '',
		broker: '',
		value: '',
		showToClient: true,
		highlight: false,
		address: {
			state: 10,
			city: 23,
			street: '',
			number: 492
		},
		category: '',
		description: '',
		googleMapsLink: '',
		details: {
			badroom: 3,
			bathroom: 1,
			numberOfEnSuites: 2,
			parkingSpaces: 4
		},
		tags: [''],
		forRent: true,
		forSale: true
	};

	let brokers = [
		{ id: 1, name: 'Scott' },
		{ id: 2, name: 'Daniel' },
		{ id: 4, name: 'John' },
		{ id: 7, name: 'Michael' }
	];

	let states = [
		{ id: 1, name: 'Minas Gerais' },
		{ id: 2, name: 'Sao Paulo' },
		{ id: 4, name: 'Bahia' },
		{ id: 7, name: 'Goias' }
	];

	let cities = [
		{ id: 1, name: 'Passos' },
		{ id: 2, name: 'Sao Paulo' },
		{ id: 4, name: 'Salvador' },
		{ id: 7, name: 'Goiania' }
	];

	let mainPhoto: File;
	let gallery: File[];

	async function submit() {
		console.log(imovel);
	}
</script>

<section class="w-full overflow-hidden bg-white py-10">
	<header class="w-ful text-center">
		<Heading
			tag="h1"
			class="mb-4 text-blue-700"
			customSize="text-2xl font-extrabold  md:text-2xl lg:text-4xl">Cadastre um novo imovel</Heading
		>
	</header>

	<div class="my-10 grid justify-center">
		<form on:submit|preventDefault={submit} class="w-[800px] p-2">
			<div class="mb-6">
				<Label for="imovel-title" class="mb-2 block">Digite o titulo do imovel</Label>
				<Input bind:value={imovel.title} id="imovel-title" placeholder="Titulo do imovel" />
			</div>

			<!-- <div class="mb-6"> -->
			<Label for="brokers">Selecione o corretor responsavel</Label>
			<Select
				id="brokers"
				class="mb-6 mt-2"
				bind:value={imovel.broker}
				placeholder="Corretor responsavel"
			>
				{#each brokers as { id, name }}
					<option value={id}>{name}</option>
				{/each}
			</Select>
			<!-- </div> -->

			<div class="mb-6 p-2">
				<Checkbox bind:checked={imovel.forRent} class="mb-6 w-4/12 cursor-pointer" color="purple"
					>Para alugar</Checkbox
				>
				<Checkbox bind:checked={imovel.forSale} class="mb-6 w-4/12 cursor-pointer" color="yellow"
					>Para venda</Checkbox
				>
			</div>

			<div class="mb-6">
				<Label for="imovel-value" class="mb-2 block">Digite o titulo do imovel</Label>
				<Input bind:value={imovel.value} id="imovel-value" placeholder="Valor do imovel" />
			</div>

			<div class="mb-6 p-2">
				<Checkbox bind:checked={imovel.showToClient} class="mb-6 w-4/12 cursor-pointer" color="blue"
					>Ocultar imovel para clientes</Checkbox
				>
				<Checkbox bind:checked={imovel.highlight} class="mb-6 w-4/12 cursor-pointer" color="orange"
					>Destacar imovel para clientes</Checkbox
				>
			</div>

			<Label for="states">Selecione o Estado</Label>
			<Select id="states" class="mb-6 mt-2" bind:value={imovel.address.state} placeholder="Estados">
				{#each states as { id, name }}
					<option value={id}>{name}</option>
				{/each}
			</Select>

			<Label for="cities">Selecione a Cidade</Label>
			<Select id="cities" class="mb-6 mt-2" bind:value={imovel.address.city} placeholder="Cidades">
				{#each cities as { id, name }}
					<option value={id}>{name}</option>
				{/each}
			</Select>

			<div class="mb-6">
				<Label for="imovel-street" class="mb-2 block">Digite o endereco</Label>
				<Input
					bind:value={imovel.address.street}
					id="imovel-street"
					placeholder="Valor do imovel"
				/>
			</div>

			<div class="mb-6">
				<Label for="imovel-description" class="mb-2">Descricao dinamica</Label>
				<Textarea
					bind:value={imovel.description}
					id="imovel-description"
					placeholder="Digite mais detalhes sobre o imovel"
					name="descrption"
					rows={4}
				/>
			</div>

			<div class="mb-6">
				<Label for="imovel-google-maps" class="mb-2">Link do Google Maps</Label>
				<Textarea
					bind:value={imovel.googleMapsLink}
					id="imovel-google-maps"
					placeholder="Insira o link da localizacao do imovel pelo google maps"
					name="googleMaps"
					rows={4}
				/>
			</div>

			<Button type="submit" color="green" class="flex w-6/12 gap-6 justify-self-end"
				>CADASTRAR IMOVEL <ArrowRightOutline size={'lg'} />
			</Button>
		</form>
	</div>
</section>
