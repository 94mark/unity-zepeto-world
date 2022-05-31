import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { Collider, GameObject } from "UnityEngine";

export default class TeleportBlock extends ZepetoScriptBehaviour {

    public teleportPos: GameObject;

    Start() {    

    }

    OnTriggerEnter(obj:Collider)
    {
        console.log(obj.name)
        this.Teleport(obj.gameObject)
    }
    Teleport(obj: GameObject) 
    {
        obj.transform.position = this.teleportPos.transform.position;
    }
}