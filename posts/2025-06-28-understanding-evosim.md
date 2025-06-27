---
title: 'Understanding EvoSim: Visual Cues and Key Settings'
date: '2025-06-28'
---

EvoSim is a dynamic simulation where understanding the visual feedback and configurable settings is key to observing evolutionary processes. This post will guide you through interpreting what you see on screen and how various parameters influence the simulation.

## Interpreting Species: Cell Colors and Intentions

Each creature in EvoSim is composed of various cell types, each with a distinct color, providing immediate insight into its capabilities. Additionally, a colored circle around a species indicates its current behavioral intention.

### Cell Colors:

*   **Movement (Blue):** These cells enable the species to move around the world.
*   **Consumption (Green):** Species with these cells can consume meat for energy.
*   **Luminescence (Yellow):** These cells might indicate light-emitting or energy-intensive processes.
*   **Roots (Brown):** Species with roots can absorb energy directly from the terrain.
*   **Energy Processor (Purple):** Likely involved in efficient energy conversion.
*   **Eyes (Light Blue):** Grant the species vision, allowing them to perceive their environment and targets.
*   **Brain (Dark Gray):** Represents the core processing unit, influencing complex behaviors.
*   **Bone (White):** Provides structural support.
*   **Unspecialized (Gray):** Basic, unspecialized cells.
*   **Turn (Orange):** Cells that aid in changing direction.
*   **Attack (Red):** Allow the species to attack other entities.

### Intention Indicators:

Species will display a colored circle around them to show their current goal:

*   **Hunting (Red):** The species is actively pursuing another species as prey.
*   **Scavenging (Green):** The species is moving towards a meat source to consume it.
*   **Fleeing (Light Blue):** The species is attempting to escape from a threat.
*   **Active Movement (Blue):** The species is moving with a specific purpose, but not necessarily hunting, scavenging, or fleeing.
*   **Rooting (Brown):** The species is stationary and absorbing energy through its roots.
*   **Stationary (Gray):** The species is not moving and has no immediate active intent.
*   **Idle (White):** The species is not currently engaged in a specific behavior.

## Key Simulation Settings Explained

The `SETTINGS` dictionary in the `EvoSim.py` file allows you to fine-tune almost every aspect of the simulation. Here's a breakdown of some crucial categories:

### Display Settings:
*   `screen_width`, `screen_height`: Dimensions of the simulation window.
*   `world_width`, `world_height`: The total size of the simulated world.
*   `fps`: Frames per second, controlling the simulation's visual smoothness.

### Population Settings:
*   `population_size`: The initial number of species in the simulation.
*   `overcrowding_limit`: The maximum number of species allowed in a spatial grid cell before some are culled.

### Energy Settings:
*   `initial_energy_min`, `initial_energy_max`: The energy range for newly spawned species.
*   `energy_gain_meat`: Energy gained from consuming a generic meat item.
*   `movement_cost_rate_per_velocity`: How much energy is consumed per unit of movement.
*   `cell_maintenance_costs`: Energy cost for each type of cell per unit of time.
*   `meat_energy_value`, `green_meat_energy_value`: Energy provided by different types of meat.
*   `meat_decay_time`: How long meat remains in the world before disappearing.
*   `max_total_meat_items`: The maximum number of meat items allowed in the world.

### Green Meat Natural Spawn Settings:
*   `green_meat_spawn_interval`: How often green meat clusters naturally appear.
*   `green_meat_cluster_min_size`, `green_meat_cluster_max_size`: The range for the number of meat pieces in a cluster.
*   `green_meat_cluster_radius`: The area within which green meat pieces in a cluster will spawn.

### Zoom and Camera:
*   `zoom_initial`, `zoom_min`, `zoom_max`: Initial, minimum, and maximum zoom levels.
*   `zoom_step`: How much the zoom changes with each step.
*   `pinch_zoom_sensitivity`: Sensitivity for touch-based zooming.

### Time Rate:
*   `time_slider_rect`: Defines the position and size of the time control slider.
*   `time_slider_min`, `time_slider_max`: The minimum and maximum values for the simulation speed.
*   `default_time_rate`: The initial speed of the simulation.

### Spatial Grid:
*   `spatial_grid_cell_size`: The size of cells in the spatial partitioning grid, affecting performance and proximity queries.

### Genetics & Mutation:
*   `lineage_id_mutation_chance`: Probability of a new species having a different lineage ID from its parent.
*   `mutation_rate_default`: The base chance for genetic mutations during reproduction.
*   `max_energy_mutation_range`, `reproduction_cooldown_mutation_range`, `mutation_rate_mutation_range`, `reproduction_distance_mutation_range`: Ranges for how much specific genetic traits can mutate.
*   `genetic_max_energy_min`, `genetic_max_energy_max`: The minimum and maximum possible values for a species' genetic maximum energy.

### Attack System:
*   `energy_drain_per_attack_cell_per_second`: Energy drained from a target per attack cell per second.
*   `attack_energy_gain_ratio`: Ratio of energy gained by the attacker from a successful attack.
*   `attack_maintenance_cost_per_second`: Energy cost for maintaining attack cells.
*   `attack_range_bonus`: Additional range for attack actions.

### Other Key Settings:
*   `min_initial_spawn_separation`: Ensures new species don't spawn too close to existing ones.
*   `target_search_cooldown_min_ms`, `target_search_cooldown_max_ms`: How often species search for new targets.
*   `sporadic_move_cooldown_min_ms`, `sporadic_move_cooldown_max_ms`: Cooldown for sporadic movement behavior.
*   `species_ui_zoom_threshold`: Zoom level at which species UI elements become visible.
*   `terrain_chunk_size`: Size of terrain chunks for rendering and processing.
*   `cinematic_event_lifetime_ms`, `cinematic_focus_duration_ms`: Settings for the cinematic camera mode, controlling how long events are tracked and focused on.

By understanding these visual cues and adjusting the settings, you can gain deeper insights into the evolutionary dynamics at play within EvoSim and even design your own experiments to observe specific outcomes.