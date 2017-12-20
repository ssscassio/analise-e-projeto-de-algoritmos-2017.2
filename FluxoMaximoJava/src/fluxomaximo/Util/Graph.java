/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fluxomaximo.Util;

import java.util.LinkedList;

/**
 *
 * @author KHAICK O. BRITO
 */
public class Graph {
    private LinkedList vertexList;
    
    public Graph() {
        vertexList = new LinkedList();
    }

    public LinkedList getVertexList() {
        return vertexList;
    }

    public void setVertexList(LinkedList vertexList) {
        this.vertexList = vertexList;
    }
    
    public void addVertex(){
        Vertex vertex = new Vertex();
        vertexList.add(vertex);
    }
    
    public Vertex removeVertex(int index){
        Vertex vertex = (Vertex) vertexList.get(index);
        vertexList.remove(index);
        return vertex;
    }
    
}
