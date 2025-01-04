<script>
	import '../../app.css';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		DropdownDivider
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	let activeUrl = $page.url.pathname;
	let { children } = $props();
</script>

<div class="w-dvw flex-col bg-transparent">
	<script>
		import {
			Navbar,
			NavBrand,
			NavLi,
			NavUl,
			NavHamburger,
			Dropdown,
			DropdownItem,
			DropdownDivider
		} from 'flowbite-svelte';
		import { ChevronDownOutline } from 'flowbite-svelte-icons';
		import { page } from '$app/stores';
		$: activeUrl = $page.url.pathname;
	</script>

	<Navbar>
		<NavBrand href="/admin">
			<img
				src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg"
				class="me-3 h-6 sm:h-9"
				alt="Flowbite Logo"
			/>
			<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				>Chrodar</span
			>
		</NavBrand>
		<NavHamburger />
		<NavUl {activeUrl}>
			<NavLi href="/admin">Dashboard</NavLi>
			<NavLi class="cursor-pointer">
				Imoveis<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />
			</NavLi>
			<Dropdown class="z-20 w-44">
				<DropdownItem href="/admin/imovel/cadastrar">Cadastrar imovel</DropdownItem>
				<DropdownItem href="/admin/imoveis">Listagem dos imoveis</DropdownItem>
			</Dropdown>
			<NavLi class="cursor-pointer">
				Usuario Logado<ChevronDownOutline
					class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white"
				/>
			</NavLi>
			<Dropdown class="z-20 w-44">
				<DropdownItem href="/imobiliaria/perfil">Configuracoes da imobiliaria</DropdownItem>
				<DropdownItem href="/cadastrar">Alterar senha</DropdownItem>
				<DropdownItem href="/imoveis">Perfil</DropdownItem>
				<DropdownDivider />
				<DropdownItem href="/">Sair</DropdownItem>
			</Dropdown>
		</NavUl>
	</Navbar>
	{@render children()}
</div>
