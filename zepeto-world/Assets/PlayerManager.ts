import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { CharacterController, GameObject } from "UnityEngine";


export default class PlayerManager extends ZepetoScriptBehaviour {

    public player: CharacterController;
    public respawnPosition: GameObject;

    Start() {    

    }

    FindPlayer()
    {
        this.player = GameObject.FindObjectOfType<CharacterController>();
    }

    Update()
    {
        if (!this.player)
        { 
            this.FindPlayer();
            return;
        }

        if (!this.CheckAlive()) this.RespawnPlayer();
    }

    CheckAlive()
    {
        // -10 아래로 내려가면 사망처리
        return this.player.transform.position.y > -10 
    }

    RespawnPlayer()
    {
        this.player.enabled = false;
        this.player.transform.position = this.respawnPosition.transform.position;
        this.player.enabled = true;
    }
}