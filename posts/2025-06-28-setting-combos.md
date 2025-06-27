---
title: 'Experimenting with EvoSim: Interesting Setting Combinations'
date: '2025-06-28'
---

EvoSim's true power lies in its highly configurable settings, offering you a virtual laboratory to conduct unique evolutionary experiments. By tweaking just a few parameters, you can dramatically alter the environmental pressures and genetic predispositions of your digital species, leading to fascinating and often unexpected outcomes. This post outlines several compelling setting combinations, providing a comprehensive guide to get you started on your own scientific explorations and observe the intricate dance of natural selection.

Before diving into specific scenarios, remember that EvoSim is a complex system. Changes in one setting can have cascading effects throughout the simulation. Don't be afraid to experiment, observe, and iterate on your hypotheses.

## Scenario 1: The High-Stakes Energy Race

This scenario is designed to create an environment of intense competition for energy, pushing species to evolve extreme efficiency in resource acquisition or aggressive predatory behaviors. It simulates a harsh world where sustenance is scarce.

**Key Settings to Adjust:**

*   **`initial_energy_min` & `initial_energy_max`**: Set these to very low values (e.g., `50-100`). This ensures that newly spawned species begin with minimal energy reserves, making their initial survival a challenge.
*   **`energy_gain_meat`**: Reduce significantly (e.g., `20-50`). Each piece of food provides less sustenance, forcing creatures to consume more frequently or find alternative energy sources.
*   **`green_meat_spawn_interval`**: Increase (e.g., `8000-12000` milliseconds). Food spawns much less frequently, creating periods of scarcity and intense competition for newly appeared resources.
*   **`cell_maintenance_costs`**: Slightly increase overall, especially for `movement` and `brain` cells. This raises the baseline cost of living, making inefficient designs quickly perish.
*   **`population_size`**: Keep relatively high (e.g., `150-200`). A larger initial population ensures immediate and fierce competition for the limited resources.

**What to Observe:**

Expect rapid extinctions of species that are not immediately efficient. Look for the accelerated evolution of highly optimized `consumption` cells, enabling quicker eating. Species might develop faster `movement` to reach scarce resources before competitors. Crucially, observe the early and more frequent emergence of `hunter` or `passive_hunter` behaviors, as species turn to predation out of sheer necessity. You will likely witness dramatic boom-and-bust cycles in population, directly correlated with the availability of food. This scenario highlights the brutal efficiency of natural selection under extreme resource pressure.

## Scenario 2: The Rooted Empire vs. The Mobile Horde

This experiment explores the fundamental ecological conflict between sessile, resource-absorbing species and mobile, foraging or predatory ones. It sets up a direct competition for dominance based on energy acquisition strategies.

**Key Settings to Adjust:**

*   **`plant_energy_absorption_rate_per_cell_per_second`**: Increase significantly (e.g., `0.5-1.0`). Make `roots` cells incredibly efficient at drawing energy from the terrain, giving rooted species a strong advantage.
*   **`green_meat_spawn_interval`**: Reduce (e.g., `1000-2000` milliseconds). Make green meat abundant, providing ample food for mobile species.
*   **`cell_maintenance_costs` for `movement`**: Increase substantially (e.g., `0.05-0.1`). Make locomotion very energy-expensive, penalizing constant movement.
*   **`cell_maintenance_costs` for `roots`**: Keep low (e.g., `0.01-0.02`). Ensure rooted existence is energy-efficient.
*   **`initial_energy_min` & `initial_energy_max`**: Use moderate values (e.g., `500-1000`).

**What to Observe:**

Will rooted species dominate the world by their sheer energy efficiency and low maintenance, or will mobile species, fueled by abundant green meat, evolve to consume them (if `attack` cells are present and effective)? Look for the rapid emergence of `stationary` brain behaviors among successful rooted lineages. If mobile species persist, how do they adapt to the high cost of movement? You might see a clear division of ecological niches, with rooted species forming dense, energy-rich patches and mobile species evolving to exploit the spaces between them or to prey upon the rooted ones. This scenario is excellent for studying niche partitioning and inter-species competition.

## Scenario 3: The Mutation Madness

This experiment pushes the boundaries of genetic change, allowing you to observe how quickly species can adapt to new forms or, conversely, self-destruct under the weight of too much randomness. It's a fast-forward button for evolution, with unpredictable results.

**Key Settings to Adjust:**

*   **`mutation_rate_default`**: Increase significantly (e.g., `0.1-0.2`). Every reproduction brings a substantial chance of genetic alteration.
*   **`max_energy_mutation_range`, `reproduction_cooldown_mutation_range`, `mutation_rate_mutation_range`, etc.**: Widen these ranges to allow for more drastic mutations in individual traits. This means a single mutation can have a much larger impact.
*   **`population_size`**: Start with a moderate size (e.g., `100`). This provides enough initial diversity without overwhelming the simulation with too many rapidly changing entities.

**What to Observe:**

Expect rapid and often chaotic evolution. Many species will likely die quickly due to the accumulation of detrimental mutations. However, you might also witness incredibly fast adaptation to environmental pressures, leading to highly specialized or bizarre new forms that would take much longer to appear under normal mutation rates. Look for lineages that manage to stabilize their `mutation_rate` to a more sustainable level, or those that thrive on constant, radical change. This scenario is perfect for exploring the limits of evolutionary adaptability and the role of genetic load.

## Scenario 4: The Overpopulation Crisis

This scenario examines the profound effects of limited space and intense intra-species competition for survival. It simulates a crowded world where resources are not necessarily scarce, but living space itself becomes the primary limiting factor.

**Key Settings to Adjust:**

*   **`world_width` & `world_height`**: Reduce these significantly (e.g., `2000x1500` or even smaller). Make the simulated world a confined space.
*   **`population_size`**: Keep high (e.g., `200-300`). This immediately creates a dense population within the small world.
*   **`overcrowding_limit`**: Reduce (e.g., `2-3`). Make overcrowding more lethal, meaning fewer species can coexist in a given spatial grid cell before culling occurs.
*   **`min_initial_spawn_separation`**: Reduce to allow for denser initial spawns, exacerbating the crowding from the start.

**What to Observe:**

Expect high rates of culling due to overcrowding. Species might evolve smaller `grid_size` to take up less physical space, allowing more individuals to survive in a given area. Alternatively, they might develop more aggressive `attack` behaviors to eliminate competitors for space, even if energy is abundant. You could see patterns of territoriality emerge, or constant skirmishes over prime locations. This scenario highlights the critical importance of spatial resources and the mechanisms of population control in a confined environment.

These scenarios are just starting points for your exploration. Don't hesitate to combine elements from different scenarios or introduce your own unique twists. The most exciting discoveries in EvoSim often come from unexpected experiments and the creative manipulation of its powerful settings. Happy simulating!