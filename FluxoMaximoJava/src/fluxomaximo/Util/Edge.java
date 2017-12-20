/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fluxomaximo.Util;

/**
 *
 * @author KHAICK O. BRITO
 */
public class Edge {
    private int weight;
    private Vertex originVertex;
    private Vertex endVertex;
    private boolean isVisited;

    public Edge(int weight, Vertex startVertex, Vertex endVertex) {
        this.weight = weight;
        this.originVertex = startVertex;
        this.endVertex = endVertex;
        this.isVisited = false;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public Vertex getStartVertex() {
        return originVertex;
    }

    public void setStartVertex(Vertex startVertex) {
        this.originVertex = startVertex;
    }

    public Vertex getEndVertex() {
        return endVertex;
    }

    public void setEndVertex(Vertex endVertex) {
        this.endVertex = endVertex;
    }
    
    public void setIsVisited(boolean bool){
        this.isVisited = bool;
    }
    
    public boolean isVisited(){
        return this.isVisited;
    }
}