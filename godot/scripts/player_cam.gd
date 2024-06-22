extends Camera2D

var stop_following_x = 1000
var stop_following_y = 465

#@onready var camera = get_node("Camera")

# Called when the node enters the scene tree for the first time.
func _ready():
	pass

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	var player_position = get_parent().global_position
	
	#print("Cam: " + str(position))
	#print("Player: " + str(player_position))
	#if player_position.y > stop_following_y:
		#### Manter a câmera em uma posição fixa quando o personagem alcança as coordenadas
		##position = Vector2(player_position.x, stop_following_y)
		#camera.current = false
	#else:
		#### Câmera segue o personagem
		#position = player_position
