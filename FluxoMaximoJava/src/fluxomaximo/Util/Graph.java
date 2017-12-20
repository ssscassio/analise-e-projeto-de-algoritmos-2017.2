/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fluxomaximo.Util;

import java.util.Iterator;
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
    
    public Edge getMaximumWeightUnvisitedVertex(Vertex vertex){
        int maximumWeight = 0;
        Iterator it = vertex.getEdgeList().iterator();
        Edge edge = null;
        while (it.hasNext()) {
            edge = (Edge) it.next();
            if(edge.getEndVertex().isVisited()){
                if (edge.getWeight() > maximumWeight) {
                    maximumWeight = edge.getWeight();
                }
            }
        }
        return edge;
    }
    
}
