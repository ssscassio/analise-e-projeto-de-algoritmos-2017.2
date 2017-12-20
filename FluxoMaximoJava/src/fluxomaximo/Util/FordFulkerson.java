/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package fluxomaximo.Util;

import java.util.Collections;
import java.util.LinkedList;
import java.util.concurrent.LinkedBlockingDeque;
import javafx.collections.transformation.SortedList;

/**
 *
 * @author KHAICK O. BRITO
 */
public class FordFulkerson {

    private Graph graph;
    private int source;
    private int destiny;

    public FordFulkerson(Graph graph, int source, int destiny) {
        this.graph = graph;
        this.source = source;
        this.destiny = destiny;

    }

    public String getMaximumFlow() {
        Vertex originVertex = (Vertex) graph.getVertexList().get(source);
        Vertex destinyVertex = (Vertex) graph.getVertexList().get(destiny);
        LinkedList iterationsValues = new LinkedList();
        boolean reachedEnd = false;
        boolean canReachEnd = true;
        while (canReachEnd) {
            while (!reachedEnd) {
                if (!originVertex.equals(destinyVertex)) {
                    Edge maximumWeightEdge = originVertex.getMaximumWeightEdge();
                    if(maximumWeightEdge.getWeight()== 0){
                        reachedEnd = true;
                    }else{
                        maximumWeightEdge.setIsVisited(true);
                        originVertex = maximumWeightEdge.getStartVertex();
                        destinyVertex = maximumWeightEdge.getEndVertex();
                    }
                }else{
                    reachedEnd = true;
                }
            }
           
                
        }
        return null;
    }

}
