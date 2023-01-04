<script>
	import { saved_status } from './store.js';
	let user = { loggedIn: false };
	let status = '';

	saved_status.subscribe(value => {
		user.loggedIn = value;
	});

	function toggle() {
		user.loggedIn = !user.loggedIn;
		saved_status.set(user.loggedIn);
	}
	
	$: {
		if (user.loggedIn)
			status = 'logged in';
		else
		  	status = 'logged out';
	}
</script>

{#if user.loggedIn}
	<div style="text-align:center">
		<button on:click={toggle}>
			Log out
		</button>
	</div>
{/if}

{#if !user.loggedIn}
	<div style="text-align:center">
		<button on:click={toggle}>
			Log in
		</button>
	</div>
{/if}

<p style="text-align:center">
	Your are currently {status}.
</p>