extends CharacterBody2D

@onready var animation: AnimationPlayer = get_node("Animation")
@onready var texture: Sprite2D = get_node("Texture")

@export var move_speed: float = 256.0

func _physics_process(_delta: float) -> void:
	move()
	animate()
	
func move() -> void:
	var direction: Vector2 = get_direction()
	velocity = direction * move_speed
	move_and_slide()
	
func get_direction() -> Vector2:
	return Vector2(
		Input.get_axis("move_left", "move_right"),
		Input.get_axis("move_up", "move_down")
	).normalized()

func animate() -> void:
	if velocity != Vector2.ZERO:
		if velocity.y > 0:
			animation.play("down_walk")
		elif velocity.y < 0:
			animation.play("up_walk")
		else:
			animation.play("side_walk")
			texture.flip_h = true if velocity.x < 0 else false	
		return
	animation.play("idle")
