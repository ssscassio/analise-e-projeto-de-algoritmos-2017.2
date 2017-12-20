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
public class GraphReader {
    private Graph graph;
    private int sourceVertex;
    private int destinyVertex;
    
    public GraphReader() {
    }
    
    public void readGraph(String fileName){
        Graph graph = new Graph();
    }

    public Graph getGraph() {
        return graph;
    }

    public void setGraph(Graph graph) {
        this.graph = graph;
    }

    public int getSourceVertex() {
        return sourceVertex;
    }

    public void setSourceVertex(int sourceVertex) {
        this.sourceVertex = sourceVertex;
    }

    public int getDestinyVertex() {
        return destinyVertex;
    }

    public void setDestinyVertex(int destinyVertex) {
        this.destinyVertex = destinyVertex;
    }

    
}
