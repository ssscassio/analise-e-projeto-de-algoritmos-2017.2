/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fluxomaximo.Util;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.LinkedBlockingDeque;
import javafx.collections.transformation.SortedList;

/**
 *
 * @author KHAICK O. BRITO
 */
public class FordFulkerson {

    private Graph graph;
    private int source;
    private int sumidouro;

    public FordFulkerson(Graph graph, int source, int sumidouro) {
        this.graph = graph;
        this.source = source;
        this.sumidouro = sumidouro;
    }

    public String getMaximumFlow() {
        //Recovering the starter vertex. (Source)
        Vertex originVertex = (Vertex) graph.getVertexList().get(source);
        //Recovering the destiny vertex. (Sumidouro)
        Vertex destinyVertex = (Vertex) graph.getVertexList().get(sumidouro);
        Vertex finalVertex = (Vertex) graph.getVertexList().get(sumidouro);
        //--------------------------------
        List<Edge> path = new LinkedList();
        List iterationsValues = new LinkedList();
        int minimumEdgeWeight = 0;
        
        boolean reachedEnd = false;
        while (finalVertex.isReachable()) {
            while (!reachedEnd) {
                if (!originVertex.equals(destinyVertex)) { //While actual vertex aren't the final vertex
                    Edge maximumWeightEdge = originVertex.getMaximumWeightEdge(); //Get the heaviest Edge on vertex edge list.
                    if(maximumWeightEdge.getWeight()<minimumEdgeWeight){
                        minimumEdgeWeight = maximumWeightEdge.getWeight();
                    }
                    else if(maximumWeightEdge.getWeight()== 0){
                        reachedEnd = true;
                    }else{
                        maximumWeightEdge.setIsVisited(true);
                        
                        originVertex = maximumWeightEdge.getStartVertex();
                        destinyVertex = maximumWeightEdge.getEndVertex();
                    }
                }else{
                    reachedEnd = true;
                    iterationsValues.add(backAndSubtract(path,minimumEdgeWeight,(Vertex)graph.getVertexList().get(source)));
                }
            }
        }
        return null;
    }
    
    /**
     * This function go back on path, edges visited, subtracting each edge weight by
     * the minmumEdgeWeight found on path and setting "isVisited" false until reach the origin vertex. 
     * @return 
     */
    private int backAndSubtract(List<Edge> path,int minimuEdgeWeight, Vertex origin){
        Edge edge;
        int maximumEdgeWeight = 0;
        while(!path.isEmpty()){
            edge = path.remove(path.size()-1);
            int edgeActualWeight = edge.getWeight();
            int newEdgeWeight = edgeActualWeight - minimuEdgeWeight;
            if((newEdgeWeight)>0){
                edge.setWeight(newEdgeWeight);
            }else{
                edge.setWeight(0);
            }
        }
        return 0;
    }
}
